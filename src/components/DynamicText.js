import React, { useEffect } from 'react'

export const DynamicText = () => {
    let array = ["Se découvrir", "S'accepter", "S'approuver", "Se valoriser"];
    let wordIndex = 0;
    let letterIndex = 0;

    useEffect(() => {
        const target = document.getElementById("text-target");

        const createLetter = () => {
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation = "anim 5s ease forwards";
            letter.innerHTML = array[wordIndex][letterIndex] === ' ' ? '&thinsp;' : array[wordIndex][letterIndex];

            setTimeout(() => {
            letter.remove();
            }, 2000);
        };

        const loop = () => {
            setTimeout(() => {
                if (wordIndex >= array.length) {
                    wordIndex = 0;
                    letterIndex = 0;
                    loop();
                } else if (letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(() => {
                        loop();
                    }, 2000);
                }
            }, 80);
        };
        loop();
    }, []);
    return (
        <span className='dynamic-text'>
            <span id='text-target'></span>
            <span className='simply'>grâce à la photographie</span>
        </span>
    )
}

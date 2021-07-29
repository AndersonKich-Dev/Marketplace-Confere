

export function setColor(background:string, color:string, opacity:number){
    

    return`
        background-color: ${background};
        opacity: ${opacity};

        p {
            color: ${color};
        }
    `;
}

export function setDisplay(display:string) {
    return`
        display: ${display};
    `;
}
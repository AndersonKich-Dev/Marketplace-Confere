export function setDisabled() {
    return`
        label {
            cursor: not-allowed;
        }    

        background-color: #ECECEC;
        opacity: .5;

        label {
            :hover {
                opacity: 1;
                background-color: #ECECEC;
            }

            :hover p {
                color: black;
            }
        }
    `;
}

export function toogleBackground() {
    return`
        background-color: #ec118b;

        p {
            color: #FFF;
        }
    `;
}

export function hiddenVisibilityPopUp() {
    return`
        visibility: hidden;
    `;
}

export function visibleVisibilityPopUp() {
    return`
        visibility: visible;
    `;
}
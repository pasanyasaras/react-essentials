
export default function Tabs({children, buttons, ButtonsContainer = 'menu'}){
    // const ButtonConainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
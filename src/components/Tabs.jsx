export default function Tabs({children,buttons,buttonsContainer = 'menu'})
{
    const BC = buttonsContainer;
    return (
        <>
            <BC>
                {buttons}
            </BC>
            {children}
        </>
    );
}
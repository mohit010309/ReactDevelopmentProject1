export default function Tabs({children,buttons,buttonsContainer})
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
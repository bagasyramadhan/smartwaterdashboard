export default function Layout({
    children, 
    meteran,
    analytics,
    payments,
}: {
    children:React.ReactNode, 
    meteran:React.ReactNode,
    analytics:React.ReactNode,
    payments:React.ReactNode,
})  {
    return (
        <div className="p-5">
            <div>{children}</div>
            <div className="mt-5 flex justify-center item-center">
                {meteran}
                {analytics}
            </div>
                {payments}
        </div>
    );
}
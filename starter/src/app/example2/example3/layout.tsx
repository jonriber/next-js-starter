

const NestedAbout = ({children}:{children:React.ReactNode}) => {
    return(
        <div>
            <h1>About Nested</h1>
            <div>{children}</div>
        </div>
    )
}

export default NestedAbout
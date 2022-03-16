type ItemProps = {
    title: string,
    classProps?: string
}


export const NavbarItem = ({ title, classProps }: ItemProps) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
    </li>
  )
}
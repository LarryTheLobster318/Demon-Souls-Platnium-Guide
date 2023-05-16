function NavItem(props) {
  return (
    <li className="mr-3 flex-1">
      <a href={`#${btoa(props.name)}`}
        className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
        <span
          className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
          {props.name}</span>
      </a>
    </li>
  );
}

export default NavItem;

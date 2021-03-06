import useDarkMode from '../hooks/useDarkMode';

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="fixed top-0 bg-purple-200 dark:bg-yellow-200 w-full p-5 text-center">
      <span onClick={() => setTheme(colorTheme)} className="inline-block">
        {colorTheme !== 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-yellow-600 cursor-pointer"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="3" />
            <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-purple-600 cursor-pointer"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
            <path d="M19 11h2m-1 -1v2" />
          </svg>
        )}
      </span>
    </div>
  );
}

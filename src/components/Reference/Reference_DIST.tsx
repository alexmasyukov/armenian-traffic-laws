// import React from 'react';
// import { useReference } from '../../context/ReferenceContext';

// type Props = {
//   is: string;
//   to?: string;
//   children: React.ReactNode;
// };

// export default function Reference({ children, is, to }: Props) {
//   const { setReference } = useReference();

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     e.preventDefault();

//     const targetElement = document.querySelector(`a[id="${to}"]`) as HTMLDivElement | null;

//     console.log(targetElement);
//     console.log(targetElement?.offsetTop);

//     if (!targetElement || !targetElement?.offsetTop) return;

//     setReference({
//       from: is,
//       to,
//     });

//     window.scrollTo({
//       top: targetElement.offsetTop - 80,
//       left: 0,
//       behavior: 'smooth',
//     });
//   };

//   if (!to) {
//     return (
//       <div
//         style={{
//           background: '#b9d7f1',
//           padding: '5px',
//         }}
//       >
//         Назад к ПДД-
//         <a
//           onClick={handleClick}
//           href={`#${from}`}
//           style={{
//             color: '#8cd321',
//             textDecoration: 'underline',
//             cursor: 'pointer',
//           }}
//         >
//           {from}
//         </a>
//       </div>
//     );
//   }

//   return (
//     <a
//       id={is}
//       onClick={handleClick}
//       href={`#${to}`}
//       style={{
//         color: '#f6ba98',
//         textDecoration: 'underline',
//         cursor: 'pointer',
//       }}
//     >
//       {children}
//     </a>
//   );
// }

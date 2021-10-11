import { memo } from "react";
import { isEqual } from "lodash";

/** MEMOIZATION */

// const Li = memo(({ fullname }) => {
//   console.log(`renderizando ${fullname}`);
//   return <li>{fullname}</li>;
// });
const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`);
  return <li>{children}</li>;
}, isEqual);
/// function to compare if is equal

// const MyList = ({ data }) => {
//   console.log("renderizando lista");
//   return (
//     <ul>
//       {data.map((x) => (
//         <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
//       ))}
//     </ul>
//   );
// };
const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      ))}
    </ul>
  );
};

export default memo(MyList);

/** MEMOIZATION */
// whats happening

/**
 *
 * FAKE memo implementation to UNDERSTAND ONLY
 *
 * const memo = (fn) => {
 *   //define una constante que va a guardar en memoria el resultado de las funciones
 *   //dependiendo del argumento que estas esten recibiendo
 *   const memory = {}
 *
 *   return (a) => {
 *      if(memory[a]) {
 *        console.log('sacando de la memoria')
 *        return memory[a]
 *      }
 *      console.log('computando')
 *      memory[a] = fn(a)
 *      return memory[a]
 *   }
 * }
 */

// import * as React from 'react';

// declare global {
//   const If: React.SFC<{ condition: any }>;
//   const Choose: React.SFC;
//   const When: React.SFC<{ condition: any }>;
//   const Otherwise: React.SFC;
//   const I18: React.SFC<{ text?: string }>;
// }

// type ConditionProps = {
//   condition: any;
//   is: { chosen: boolean };
// };

// export const If: React.SFC<ConditionProps> = props => {
//   return props.condition && (props.children as any);
// };

// If.displayName = 'If';

// export const Choose: React.SFC<ConditionProps> = props => {
//   const is = { chosen: false };
//   return React.Children.map(props.children, child => {
//     return React.cloneElement(child as any, {
//       is
//     });
//   }) as any;
//   // this will only work in Sync rendering ... maybe will break in future react.
//   // (global as any).__chosen__ = false;
//   // return props.children as any;
// };

// Choose.displayName = 'Choose';

// export const When: React.SFC<ConditionProps> = props => {
//   if (props.condition) {
//     // (global as any).__chosen__ = true;
//     props.is.chosen = true;
//   }
//   return props.condition && (props.children as any);
// };

// When.displayName = 'When';

// export const Otherwise: React.SFC<ConditionProps> = props => {
//   // return (global as any).__chosen__ && (props.children as any);
//   return !props.is.chosen && (props.children as any);
// };

// Otherwise.displayName = 'Otherwise';

// const g = global as any;

// g.If = If;
// g.Choose = Choose;
// g.When = When;
// g.Otherwise = Otherwise;

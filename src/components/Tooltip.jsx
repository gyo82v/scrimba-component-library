// src/components/Tooltip.jsx
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export default function Tooltip({
  variant = 'default',
  darkmode = false,
  title,
  children,
  side = 'top',
  align = 'center',
  open, // pass true to force visible (static demo)
}) {
  const variants = {
    default: `from-neutral-200 to-neutral-100 text-neutral-700`,
    blue: `from-blue-200 to-blue-100 text-blue-700`,
    purple: `from-purple-200 to-purple-100 text-purple-700`,
    green: `from-green-200 to-green-100 text-green-700`,
  };

  const darkVariants = {
    default: `from-neutral-700 to-neutral-600 text-neutral-100`,
    blue: `from-blue-700 to-blue-600 text-blue-100`,
    purple: `from-purple-700 to-purple-600 text-purple-100`,
    green: `from-green-700 to-green-600 text-green-100`,
  };

  // simple mapping for arrow fill class (solid color that visually matches gradient)
  const arrowFills = {
    default: 'fill-neutral-100',
    blue: 'fill-blue-100',
    purple: 'fill-purple-100',
    green: 'fill-green-100',
  };
  const darkArrowFills = {
    default: 'fill-neutral-700',
    blue: 'fill-blue-700',
    purple: 'fill-purple-700',
    green: 'fill-green-700',
  };

  const container = `
    bg-gradient-to-br p-3 rounded-lg shadow-lg
    ${!darkmode ? variants[variant] : darkVariants[variant]}
  `;

  // ensure trigger is a real element (if children is plain text)
  const trigger =
    typeof children === 'string' || typeof children === 'number' ? (
      <span className="inline-block">{children}</span>
    ) : (
      children
    );

  const arrowClass = !darkmode ? arrowFills[variant] ?? 'fill-neutral-100' : darkArrowFills[variant] ?? 'fill-neutral-700';

  return (
    <TooltipPrimitive.Provider delayDuration={150}>
      {/* if `open` is undefined, Radix uses hover/focus as normal.
          if open===true (or false) it is controlled. */}
      <TooltipPrimitive.Root open={open} onOpenChange={() => { /* leave uncontrolled unless user passes onOpenChange */ }}>
        <TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={6}
            className={`
              ${container}
              text-sm font-medium max-w-xs
              animate-in fade-in-50
              data-[side=top]:slide-in-from-bottom-2
              data-[side=bottom]:slide-in-from-top-2
              data-[side=left]:slide-in-from-right-2
              data-[side=right]:slide-in-from-left-2
            `}
          >
            <p>{title}</p>
            <TooltipPrimitive.Arrow className={arrowClass} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
































/*

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export default function Tooltip({variant = "default", darkmode = false, title, children}){

    const variants = {
        default : `from-neutral-200 to-neutral-100 text-neutral-700`,
        blue : `from-blue-200 to-blue-100 text-blue-700`,
        purple : `from-purple-200 to-purple-100 text-purple-700`,
        green : `from-green-200 to-green-100 text-green-700`

    }
    const darkVariants = {
        default : `from-neutral-700 to-neutral-600 text-neutral-100`,
        blue : `from-blue-700 to-blue-600 text-blue-100`,
        purple : `from-purple-700 to-purple-600 text-purple-100`,
        green : `from-green-700 to-green-600 text-green-100`
    }

    const container = `bg-gradient-to-br p-3 rounded-lg shadow-lg
                       ${!darkmode ? variants[variant] : darkVariants[variant]}`
    return(
        <section className={container}>
            <div></div>
            <div>
                <p>{title}</p>
                <p>{children}</p>
            </div>
        </section>
    )

}*/
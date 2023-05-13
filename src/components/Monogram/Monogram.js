import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            d="M0,18.6c2.78,5.88,6.61,7.97,11.67,7.97c4.14,0,7.69-2.12,7.69-6.61c0-4.27-2.97-6.33-8.95-10.31
            C5.85,6.64,4.46,5.66,4.46,3.67c0-1.71,1.49-3.01,3.99-3.01c4.11,0,5.73,3.51,6.64,6.99l3.73-1.55C15.97,1.77,12.78,0,8.76,0
            S1.49,1.9,1.49,5.6c0,3.42,2.09,5.16,7.24,8.67c5.09,3.57,7.69,5.25,7.69,7.69c0,2.5-1.71,3.95-4.37,3.95
            c-4.24,0-7.27-4.02-8.29-9.39L0,18.6z"
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});

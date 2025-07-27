import { forwardRef } from 'react';
import Spline, { SplineProps } from '@splinetool/react-spline';

const WrappedSpline = forwardRef<HTMLDivElement, SplineProps>((props, ref) => {
    return <Spline ref={ref} {...props} />;
});

WrappedSpline.displayName = 'WrappedSpline';

export default WrappedSpline;

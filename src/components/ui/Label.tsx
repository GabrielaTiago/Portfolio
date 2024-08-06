'use client';
import {
	ComponentPropsWithoutRef,
	ElementRef,
	forwardRef,
	ReactNode
	} from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@/lib/utils';

export const Label =forwardRef<ElementRef<typeof LabelPrimitive.Root>, ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
	({ className, ...props }, ref) => (
		<LabelPrimitive.Root
			ref={ref}
			className={cn(
				'text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
				className
			)}
			{...props}
		/>
	)
);
Label.displayName = LabelPrimitive.Root.displayName;

export const LabelInputContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
	return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};

import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

type HeroIconProps = {
    solid?: boolean;
    iconName: IconName;
    className?: string;
} & React.HtmlHTMLAttributes<SVGSVGElement>

export default function HeroIcon(props: HeroIconProps): JSX.Element {
    const { solid, iconName, className } = props;
    const Icon = solid ? SolidIcons[iconName] : OutlineIcons[iconName];
    return <Icon className={className ?? 'h-6 w-6'} {...props} />;
}
interface FooterProps {
    name: string
    icon: React.ReactElement
    description: string
}

export const FooterItem = ({ name, icon, description }: FooterProps) => {
    return (
        <div className="flex gap-2">
            <span className="h-12 w-12 rounded-full flex items-center justify-center bg-primary">
                {icon}
            </span>
            <div className="text-sm text-white/90 font-light">
                <h3 className="font-bold">{name}</h3>
                <h2>{description}</h2>
            </div>
        </div>
    );
}

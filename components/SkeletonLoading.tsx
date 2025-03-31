import { Skeleton } from "moti/skeleton"

interface Props {
    children: React.ReactElement
}

const MySkeleton: React.FC<Props> = ({ children }) => {
    return (
        <Skeleton colorMode="light" radius={"square"}>
            {children}
        </Skeleton>
    )
}

export default MySkeleton
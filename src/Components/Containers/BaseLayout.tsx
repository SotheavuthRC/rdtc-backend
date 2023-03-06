
import { Helmet } from 'react-helmet'
export interface LayoutType {
    children: React.ReactNode;
}

export const BaseLayout = ({ children }: LayoutType) => {

    return <>
        <Helmet>
            <title>RDTC</title>
        </Helmet>
        <div>{children}</div>
    </>

}
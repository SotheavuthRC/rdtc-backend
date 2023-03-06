import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spin, Menu } from "antd";
import type { MenuProps } from "antd";
// import { MakeIndicatorSelector } from "Modules/Application/Selectors";
import {
    DollarOutlined,
    HomeOutlined,
    PercentageOutlined,
    SolutionOutlined,
} from "@ant-design/icons";

import Logo from "Assets/Images/rdtc-logo.jpg";
import { LayoutType } from "Components/Containers/BaseLayout";

export const AdminLayout = ({ children }: LayoutType) => {
    // fields
    const dispatch = useDispatch();

    // const isLoading = useSelector(MakeIndicatorSelector());
    const isLoading = false;
    const mainNavigation: MenuProps["items"] = [
        {
            label: <Link to="/">ទំព័រដើម</Link>,
            key: "1",
            icon: <HomeOutlined />,
        },
        {
            label: "កាស៊ីណូ",
            key: "2",
            icon: <DollarOutlined />,
            children: [
                {
                    key: "160",
                    label: "ពាក្យស្នើសុំ",
                    children: [
                        {
                            label: (
                                <Link to="/license/casino/application-form/request-license">
                                    ពាក្យស្នើសុំអាជ្ញាបណ្ណ
                                </Link>
                            ),
                            key: "161",
                        },
                        {
                            label: (
                                <Link to="/certificate/casino/request-game-type/request">
                                    ពាក្យស្នើសុំចុះបញ្ជីប្រភេទល្បែង
                                </Link>
                            ),
                            key: "162",
                        },
                        {
                            label: (
                                <Link to="/certificate/casino/request-game-rule/request">
                                    ពាក្យស្នើសុំចុះបញ្ជីវិធានល្បែង
                                </Link>
                            ),
                            key: "163",
                        },
                        {
                            label: (
                                <Link to="/certificate/casino/request-game-equipment/request">
                                    ពាក្យស្នើសុំចុះបញ្ជីវិធានល្បែង
                                </Link>
                            ),
                            key: "164",
                        },
                    ],
                },
                {
                    key: "180",
                    label: "អាជ្ញាបណ្ណ/វិញ្ញាបណ្ណបត្រ",
                    children: [
                        {
                            label: "អាជ្ញាបណ្ណ",
                            key: "181",
                        },
                        {
                            label: "វិញ្ញាបណ្ណបត្រប្រភេទល្បែង",
                            key: "182",
                        },
                        {
                            label: "វិញ្ញាបណ្ណបត្រវិធានល្បែង",
                            key: "183",
                        },
                        {
                            label: "វិញ្ញាបណ្ណបត្រឧបករណ៍ល្បែង",
                            key: "184",
                        },
                    ],
                },
                {
                    type: "group",
                    key: "140",
                    label: "ព័ត៌មាន",
                    children: [
                        {
                            label: (
                                <Link to={`/entity/company`}>
                                    កម្មសិទ្ធករ/ក្រុមហ៊ុន
                                </Link>
                            ),
                            key: "141",
                        },
                        {
                            label: (
                                <Link to={`/entity/operator`}>
                                    ប្រតិបត្តករកាស៊ីណូ
                                </Link>
                            ),
                            key: "142",
                        },
                    ],
                },
                {
                    type: "group",
                    label: "ទិន្នន័យគោល",
                    key: "110",
                    children: [
                        {
                            label: (
                                <Link to={`/settings/game-type`}>
                                    ប្រភេទល្បែង
                                </Link>
                            ),
                            key: "111",
                        },
                        {
                            label: (
                                <Link to={`/settings/game-rule?entityType`}>
                                    វិធានល្បែង
                                </Link>
                            ),
                            key: "112",
                        },
                    ],
                },
            ],
        },

        {
            label: "ទិន្នន័យគោល",
            key: "4",
            icon: <SolutionOutlined />,
            children: [
                {
                    label: "កាស៊ីណូ",
                    key: "110",
                    children: [
                        {
                            label: (
                                <Link to={`/settings/game-type`}>
                                    ប្រភេទល្បែង
                                </Link>
                            ),
                            key: "111",
                        },
                        {
                            label: (
                                <Link to={`/settings/game-rule`}>
                                    វិធានល្បែង
                                </Link>
                            ),
                            key: "112",
                        },
                        {
                            label: (
                                <Link to={`/settings/game-rule`}>
                                    ប្រភេទឧបករន៍ល្បែង
                                </Link>
                            ),
                            key: "113",
                        },
                        {
                            label: (
                                <Link
                                    to={`/settings/inspection-certificate-type`}
                                >
                                    ប្រភេទលតាបត្រ
                                </Link>
                            ),
                            key: "114",
                        },
                        {
                            label: (
                                <Link
                                    to={`/settings/inspection-certificate-status`}
                                >
                                    ស្ថានភាពលតាបត្រ
                                </Link>
                            ),
                            key: "115",
                        },
                    ],
                },
                {
                    label: "ល្បែងផ្សងសំណាង",
                    key: "210",
                    children: [
                        {
                            label: (
                                <Link to={`/settings/game-type`}>
                                    ប្រភេទល្បែង
                                </Link>
                            ),
                            key: "211",
                        },
                    ],
                },
                {
                    key: "50",
                    label: "ទិន្នន័យប្រព័ន្ធ",
                    children: [
                        {
                            label: "ប្រភេទពាក្យស្នើសុំ",
                            key: "51",
                        },
                    ],
                },
            ],
        },
    ];

    // events
    const onSignout = () => {
        // dispatch(LogoutAction());
    };

    return (
        <div className="h-screen flex">
            <div className="hidden items-center w-30 bg-indigo-700 md:flex md:flex-col">
                <div className="flex-none py-3">
                    <img
                        className="h-16 w-auto m-auto "
                        src={Logo}
                        alt="CGMC"
                    />
                </div>
                <Menu
                    className="admin-navigation grow bg-transparent "
                    onClick={(e) => console.log(e)}
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="vertical"
                    items={mainNavigation}
                />
                {/* <ProfileAvatar onSignout={onSignout} /> */}
            </div>

            {/* Mobile menu */}
            {/* <SidebarMobile sidebarNavigation={sidebarNavigation} /> */}

            {/* Content area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Main content */}

                <div className="flex-1 flex relative items-stretch overflow-hidden ">
                    <div
                        className={`flex w-full h-full overflow-hidden absolute backdrop-blur-sm bg-white/10 items-center align-middle z-50 ${
                            isLoading ? "visible" : "invisible"
                        }`}
                    >
                        <Spin
                            size="large"
                            className="m-auto"
                            spinning={isLoading}
                        />
                    </div>

                    <main className="flex-1 overflow-y-auto ">
                        <section
                            aria-labelledby="primary-heading"
                            className="min-w-0 flex-1 h-full flex flex-col lg:order-last relative"
                        >
                            {children}
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

import dynamic from 'next/dynamic'
const ReDirectLoader = dynamic(() => import('./ReDirectLoader'), { ssr: false });

const withAuth = Component => {
    // const Auth = (props) => {
    //     const cookies = new Cookies();
    //     if (cookies.get('jwt') === undefined) {
    //         return (
    //             <ReDirectLoader />
    //         )
    //     }
    //     return (
    //         <Component {...props} />
    //     );
    // };

    // // Copy getInitial props so it will run as well
    // if (Component.getServerSideProps) {
    //     Auth.getServerSideProps = Component.getServerSideProps;
    // }

    // return Auth;
};

export default withAuth;
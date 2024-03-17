import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='md:flex justify-between items-center py-7 border-b-2 mb-5'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
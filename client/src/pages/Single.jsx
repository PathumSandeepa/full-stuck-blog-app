import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';

function Single() {
    return (
        <div className='single'>
            <div className='content'>
                <img
                    src='https://images.pexels.com/photos/574177/pexels-photo-574177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                <div className='user'>
                    <img
                        src='https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <div className='info'>
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className='edit'>
                        <Link to={`/write?end=2`}>
                            <img src={Edit} alt='edit icon'/>
                        </Link>
                        <img src={Delete} alt='delete icin'/>
                    </div>
                </div>
            </div>
            <div className='menu'>m</div>
        </div>
    )
}

export default Single
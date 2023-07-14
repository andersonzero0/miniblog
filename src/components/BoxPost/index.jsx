import { AtSign } from 'lucide-react';
import './style.css';

export default function BoxPost(props) {

    return (
        <div className='boxPost'>
            <div className='boxName'>
                <AtSign size={'13px'} />
                <small>{props.author}</small>
            </div>
            <div>
                <strong>{props.message}</strong>
            </div>
            <div>
                <small>{props.date}</small>
            </div>
        </div>
    )
    
}
import React,{useState} from 'react';

const navLinks = [
    { url: '/hot', name: '인기' },
    { url: '/celebrity', name: '연예' },
    { url: '/daily', name: '일상' }];
const board = ["인기", "연예", "일상"];

const Sidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const results = !searchTerm ? navLinks : navLinks.filter(navLinks =>
        navLinks.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    return(
        <div>
        <br/>
        <input type="text" className="Sidebar-text" placeholder="게시판 검색" size="14" value={searchTerm} onChange={handleChange}/>
        <nav className="Sidebar-body">
        <hr size="2"></hr>
        {results.map(item => (
            <li className="Sidebar-li"><a href={item.url}>{item.name}</a></li>
            ))}
        </nav>
        </div>
        );
    }
export default Sidebar;
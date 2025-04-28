import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import { FaUsers, FaBox, FaHandshake, FaClipboardList, FaArrowRight, FaExclamationCircle, FaCheckCircle, FaClock } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

const AdminReports = () => {
  const [counts, setCounts] = useState({ users: 0, products: 0, greetMeets: 0, posts: 0 });
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [recentGreetMeets, setRecentGreetMeets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    const loadingState = refreshing ? setRefreshing : setLoading;
    loadingState(true);
    setError(null);
    try {
      const [usersRes, productsRes, greetMeetsRes, postsRes] = await Promise.all([
        axios.get('https://localhost:44384/api/users'),
        axios.get('https://localhost:44384/api/products'),
        axios.get('https://localhost:44384/api/GetAll'),
        axios.get('https://localhost:44384/api/userpost'),
      ]);

      setCounts({ users: usersRes.data.length, products: productsRes.data.length, greetMeets: greetMeetsRes.data.length, posts: postsRes.data.length });
      setRecentUsers(usersRes.data.slice(-5).reverse());
      setRecentPosts(postsRes.data.slice(-5).reverse());
      setRecentGreetMeets(greetMeetsRes.data.slice(-5).reverse());

    } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      loadingState(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleRefresh = () => { setRefreshing(true); fetchData(); };

  const Card = ({ title, count, icon, color, onClick }) => (
    <div onClick={onClick} style={{ flex: '1 1 220px', background: '#ffffff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '20px', transition: 'transform 0.2s, box-shadow 0.2s', minHeight: '100px', ':hover': { transform: 'translateY(-5px)', boxShadow: '0 6px 20px rgba(0,0,0,0.12)' } }}>
      <div style={{ fontSize: '32px', color: color, background: `${color}20`, padding: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
      <div>
        <h3 style={{ margin: 0, fontSize: '14px', color: '#6b7280', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</h3>
        <p style={{ margin: '8px 0 0 0', fontSize: '28px', fontWeight: '700', color: '#111827' }}>{count}</p>
      </div>
    </div>
  );

  return (
    <div >
    <div style={{ background: '#f8fafc', minHeight: '100vh',paddingRight:"80px" }}>
      <AdminNavbar />
      <div style={{ marginLeft: '80px', padding: '30px', '@media (max-width: 768px)': { marginLeft: '0', padding: '20px' } }}> 
        <div style={{ marginTop: '80px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>Dashboard Overview</h2>
          
        </div>

        {loading && !refreshing ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', border: '4px solid #e2e8f0', borderTopColor: '#3b82f6', borderRadius: '50%', margin: '0 auto 20px', animation: 'spin 1s linear infinite' }} />
              <p style={{ color: '#64748b', fontWeight: '500' }}>Loading dashboard data...</p>
            </div>
          </div>
        ) : error ? (
          <div style={{ background: '#fff1f2', borderLeft: '4px solid #f87171', padding: '20px', borderRadius: '8px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <FaExclamationCircle style={{ color: '#ef4444', fontSize: '24px' }} />
            <div>
              <h3 style={{ margin: '0 0 5px 0', color: '#b91c1c' }}>Error Loading Data</h3>
              <p style={{ margin: 0, color: '#7f1d1d' }}>{error}</p>
            </div>
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <Card title="Total Users" count={counts.users} icon={<FaUsers />} color="#3b82f6" />
              <Card title="Total Products" count={counts.products} icon={<FaBox />} color="#10b981" />
              <Card title="Total GreetMeets" count={counts.greetMeets} icon={<FaHandshake />} color="#f59e0b" />
              <Card title="Total Posts" count={counts.posts} icon={<FaClipboardList />} color="#8b5cf6" />
            </div>

            {/* Recent Users - Full Width */}
            <div style={{ marginBottom: '30px' }}>
              <Section 
                title="Recent Users" 
                data={recentUsers} 
                columns={['User_Name', 'User_Email', 'User_Phno']} 
                headers={['Name', 'Email', 'Phone']} 
                icon={<FaUsers style={{ color: '#3b82f6', fontSize: '24px' }} />} // Increased icon size
                fullWidth
              />
            </div>

            {/* Recent Posts and GreetMeets in 2-column layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '30px' }}>
              <Section 
                title="Recent Posts" 
                data={recentPosts} 
                columns={['Heading', 'Description']} 
                headers={['Title', 'Description']} 
                icon={<FaClipboardList style={{ color: '#8b5cf6', fontSize: '24px' }} />} // Increased icon size
              />
              </div>
              <div className='pb-5'>
              <Section 
                title="Recent GreetMeets" 
                data={recentGreetMeets} 
                columns={['Event_Name', 'Hosted_By','Event_Type','Venue']} 
                headers={['Event Name', 'Hosted By','Event type','Venue']} 
                icon={<FaHandshake style={{ color: '#f59e0b', fontSize: '24px' }} />} // Increased icon size
              />
              </div>
            
            <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaClipboardList style={{ color: '#64748b', fontSize: '20px' }} /> Admin Notes & Reminders
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <NoteItem icon={<FaExclamationCircle style={{ color: '#f97316', fontSize: '20px' }} />} title="Important" notes={['Monitor product stock levels', 'API maintenance scheduled', 'Security audit next week']} />
                <NoteItem icon={<FaCheckCircle style={{ color: '#10b981', fontSize: '20px' }} />} title="Completed" notes={['User dashboard redesign', 'Database optimization', 'Q3 performance report']} />
                <NoteItem icon={<FaClock style={{ color: '#3b82f6', fontSize: '20px' }} />} title="Upcoming" notes={['Export feature development', 'Team training session', 'Server migration']} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

const Section = ({ title, data, columns, headers, icon, fullWidth }) => (
  <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', height: '100%', width: fullWidth ? '100%' : 'auto' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '15px' }}> {/* Increased gap */}
        <div style={{ display: 'flex', alignItems: 'center' }}>{icon}</div> {title}
      </h3>
      
    </div>
  
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
        <thead>
          <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
            {headers.map((header, i) => (
              <th key={i} style={{ padding: '12px 15px', textAlign: 'left', fontWeight: '600', color: '#64748b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', ':hover': { background: '#f8fafc' } }}>
              {columns.map((col, j) => (
                <td key={j} style={{ padding: '12px 15px', color: '#334155', fontSize: '14px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item[col] || 'N/A'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {data.length === 0 && (
      <div style={{ padding: '20px', textAlign: 'center', color: '#64748b', fontSize: '14px' }}>No data available</div>
    )}
  </div>
);

const NoteItem = ({ icon, title, notes }) => (
  <div style={{ background: '#ffffff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
      {icon}
      <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#334155' }}>{title}</h4>
    </div>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {notes.map((note, i) => (
        <li key={i} style={{ padding: '8px 0', display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#475569', ':before': { content: '"•"', color: '#94a3b8' } }}>{note}</li>
      ))}
    </ul>
  </div>
);

export default AdminReports;

import React, { useEffect, useState } from 'react';
import './About.css'; // Import the CSS file

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching data');
        }
      })
      .then(resp => {
        setData(resp);
      })
      .catch(error => {
        console.error('Error Fetching data:', error);
        setData([]); // return an empty array as a fallback
      });
  }, []);

  return (
    <>
     <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Street</th>
      <th>Suite</th>
      <th>City</th>
      <th>Zipcode</th>
      <th>Lat</th>
      <th>Lng</th>
      <th>Phone</th>
      <th>Website</th>
      <th>Company Name</th>
      <th>Catch Phrase</th>
      <th>BS</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) => (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.address.street}</td>
      <td>{item.address.suite}</td>
      <td>{item.address.city}</td>
      <td>{item.address.zipcode}</td>
      <td>{item.address.geo.lat}</td>
      <td>{item.address.geo.lng}</td>
      <td>{item.phone}</td>
      <td>{item.website}</td>
      <td>{item.company.name}</td>
      <td>{item.company.catchPhrase}</td>
      <td>{item.company.bs}</td>
    </tr>
    ))}
  </tbody>
</table>
    </>
  );
}

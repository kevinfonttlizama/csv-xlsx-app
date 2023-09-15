import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as XLSX from 'xlsx';

const ReportTable = () => {
  const [reportRecords, setReportRecords] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/report_records')
      .then((response) => {
        setReportRecords(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const exportToXLSX = () => {
    const ws = XLSX.utils.json_to_sheet(reportRecords);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Report Records');
    XLSX.writeFile(wb, 'report_records.xlsx');
  };

  return (
    <div>
      <h1>Report Records</h1>
      <button className="btn btn-primary" onClick={exportToXLSX}>Exportar a XLSX</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Branch Name</th>
            <th>Ticket Type</th>
            <th>Description</th>
            <th>Rates</th>
            <th>Discount</th>
            <th>Coupon</th>
            <th>Net Amount</th>
            <th>Transactions</th>
            <th>Payment Code</th>
            <th>Returns</th>
            <th>Cash Transaction</th>
            <th>Created On</th>
            <th>Date Modified</th>
            <th>Origin City</th>
            <th>Destination City</th>
            <th>Seat Type</th>
            <th>Service</th>
            <th>Travel Date</th>
            <th>Departure Time</th>
            <th>Passenger Email</th>
            <th>Doc Type</th>
            <th>ID Number</th>
          </tr>
        </thead>
        <tbody>
          {reportRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.user}</td>
              <td>{record.branch_name}</td>
              <td>{record.ticket_type}</td>
              <td>{record.description}</td>
              <td>{record.rates}</td>
              <td>{record.discount}</td>
              <td>{record.coupon}</td>
              <td>{record.net_amount}</td>
              <td>{record.transactions}</td>
              <td>{record.payment_code}</td>
              <td>{record.returns}</td>
              <td>{record.cash_transaction}</td>
              <td>{record.created_on}</td>
              <td>{record.date_modified}</td>
              <td>{record.origin_city}</td>
              <td>{record.destination_city}</td>
              <td>{record.seat_type}</td>
              <td>{record.service}</td>
              <td>{record.travel_date}</td>
              <td>{record.departure_time}</td>
              <td>{record.passenger_email}</td>
              <td>{record.doc_type}</td>
              <td>{record.id_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;

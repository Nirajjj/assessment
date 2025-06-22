import React from "react";
import "./ClientDetails.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import SiteDataTable from "../components/tabel";
import Timeline from "../components/Timline";

const ClientDetails = () => {
  return (
    <div className="main-container">
      <div className="main-info">
        <div className="card">
          <div className="card-header">
            <div>
              <h1 className="company-name">Burman Hospitality Pvt. Ltd.</h1>
              <p className="company-metadata">
                ● Delhi ● Central Delhi ● 1100012 |
                <span className="date-meta"> Created on: 1 JUL 2022 </span> |
                <span className="status-pill">POSTPAID</span>
              </p>
            </div>
            <div className="actions">
              <button className="menu-btn">
                <RxHamburgerMenu className="hamburger-menu" />
              </button>
              <button className="action-btn">
                <FaPlus />
                Raise Query
              </button>
            </div>
          </div>
          <hr class="solid"></hr>
          <div className="card-body">
            <div className="financial-section">
              <div className="financial-item">
                <span className="value">10,00,000</span>
                <span className="label">Total Revenue</span>
              </div>
              <div className="financial-item">
                <span className="value text-success">7,00,000</span>
                <span className="label text-success">Payment Received</span>
              </div>
              <div className="financial-item">
                <span className="value">3,00,000</span>
                <span className="label text-info">Not Yet Due</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="overdue-section">
              <div className="financial-item">
                <span className="label text-danger">
                  Payment <br />
                  Overdue
                </span>
              </div>
              <div className="financial-item">
                <span className="value">20,000</span>
                <span className="label text-yellow one-char-label">A</span>
              </div>
              <div className="financial-item">
                <span className="value">50,000</span>
                <span className="label text-orange one-char-label">B</span>
              </div>
              <div className="financial-item">
                <span className="value">50,000</span>
                <span className="label text-orange one-char-label">C</span>
              </div>
              <div className="financial-item">
                <span className="value">30,000</span>
                <span className="label text-danger one-char-label">D</span>
              </div>
            </div>
          </div>
          <hr class="solid"></hr>

          <div class="card-footer">
            <div class="footer-item">
              <span class="label">Lead Category - Source</span>
              <span class="value-main">Others - References</span>
            </div>
            <div class="footer-item">
              <span class="label">Latest Category - Lead source</span>
              <span class="value-main">-</span>
            </div>
            <div class="footer-item">
              <span class="label">Last Updated</span>
              <span class="value-main">07 Nov 2023</span>
            </div>
            <div class="footer-item">
              <span class="label">Total Outstanding</span>
              <span class="value-main text-danger">10,00,000</span>
            </div>
            <div class="footer-item">
              <span class="label">Last Order Date</span>
              <span class="value-main">10 Dec 2023 03:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      <SiteDataTable />

      <Timeline />
    </div>
  );
};

export default ClientDetails;

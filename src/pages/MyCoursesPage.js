import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyCoursesPage = () => {
  return <div className="my-courses">
    <div className="grid grid-cols-4 gap-8">
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
      <Link to={`/course/${'1'}`} className="grid-item">SCD</Link>
    </div>
  </div>;
};

const mapStateToProps = (state) => {

  return {}
}

export default connect(mapStateToProps)(MyCoursesPage);

import React from 'react';

function AppContentWrapper ({ children, title, subtitle }) {
  return (
    <div className="app-content-body fade-in-up">
      <div className="bg-light lter b-b wrapper-md ng-scope">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="m-n font-thin h3">
              {title}
            </h1>
            <small class="text-muted">{subtitle}</small>
          </div>
        </div>
      </div>

      <div className="wrapper-md">
          {children}
      </div>
    </div>
  );
}

export default AppContentWrapper;

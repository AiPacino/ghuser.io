import React from 'react';

const RightPanel = props => {
  const compare = (a, b) => {
    if (a.total_score < b.total_score) {
      return 1;
    }
    if (a.total_score > b.total_score) {
      return -1;
    }
    return 0;
  };

  const contribs = Object.values(props.contribs.repos);
  contribs.sort(compare);

  const roundHalf = num => Math.round(num * 2) / 2;

  const repos = [];
  for (const contrib of contribs) {
    repos.push(
      <div key={contrib.full_name} className="border-bottom border-gray-light">
        <div>
          <a href={`https://github.com/${contrib.full_name}`}
             target="_blank">{contrib.full_name}</a>
        </div>
        <div><small>project popularity (based on stars): {roundHalf(contrib.popularity)} / 5</small></div>
        <div><small>project maturity (based on num of commits): {roundHalf(contrib.maturity)} / 5</small></div>
        <div><small>project activity (based on age of last push): {roundHalf(contrib.activity)} / 5</small></div>
        <div><small>{props.username} made {roundHalf(contrib.percentage)} % of this project</small></div>
        <div><small>=> sorting score for this contribution: {roundHalf(contrib.total_score)} / 15</small></div>
      </div>
    );
  }

  return (
    <div className="col-9"><ul>{repos}</ul></div>
  );
};

export default RightPanel;

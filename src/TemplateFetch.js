import React, { useEffect, useState } from 'react';

export default function TemplateFetch() {
  const [searchValue, setSearchValue] = useState('');
  const templateUrl = 'https://api.memegen.link/templates/';

  return (
    <div>
      <input
        value={searchValue}
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div>results</div>
    </div>
  );
}

// https://www.youtube.com/watch?app=desktop&v=nwJQBDPfGEk
// look into useEffect with fetching

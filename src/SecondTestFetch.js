import React, { useEffect, useState } from 'react';

export default function SecondTestFetch() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('https://api.memegen.link/templates/');
        const data = await response.json();
        setTemplates(data);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    // Call fetchTemplates and handle any potential promise rejections
    fetchTemplates().catch((error) =>
      console.error('Error in fetchTemplates:', error),
    );
  }, []);

  return (
    <div>
      <h1>Meme Templates</h1>
      <div>
        {templates.map((template) => (
          <img
            key={`template-${String(template.id)}`}
            src={template.blank}
            alt={template.name}
            width="50"
            height="50"
          />
        ))}
      </div>
    </div>
  );
}

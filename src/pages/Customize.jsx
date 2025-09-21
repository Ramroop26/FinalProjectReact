import  "../CSS/customize.css"; // Agar styling chahiye ho

const Customize = () => {
  return (
    <div className="customize-page">
      <h1>Welcome to Customize Page</h1>
      <p>This page is fully customizable. You can modify content, styles, and add new components.</p>

      <section className="features">
        <h2>Features:</h2>
        <ul>
          <li>✅ Simple and clean layout</li>
          <li>🎨 Easy to style</li>
          <li>⚙️ Ready to extend with components</li>
        </ul>
      </section>

      <button className="action-btn" onClick={() => alert('You clicked the Customize button!')}>
        Click Me
      </button>
    </div>
  );
};

export default Customize;

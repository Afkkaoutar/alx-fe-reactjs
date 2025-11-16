function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '20px auto',
        width: '300px',
        borderRadius: '8px',
        backgroundColor: '#f7f7f7'
      }}
    >
      <h2 style={{ color: 'blue' }}>{props.name}</h2>

      <p>
        Age:{" "}
        <span style={{ fontWeight: 'bold' }}>
          {props.age}
        </span>
      </p>

      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

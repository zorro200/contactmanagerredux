import { connect } from "react-redux";

function ContactList(props) {
    const contactList = props.contacts.map((contact, i) => <li key={i}>{contact}</li>);
    return <ul>{contactList}</ul>;
}

// This function will be called every time that the state has been changed and
// return what we need from state
function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

// We send the current state's info we want here to component's props
export default connect(mapStateToProps) (ContactList);
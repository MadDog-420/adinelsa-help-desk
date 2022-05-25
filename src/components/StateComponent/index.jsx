import './styles.scss';

const StateComponent = (props) => {
    const { type, children } = props;
    return (
        <span className={`custom-state ${type} border-round px-3 text-white`}>
            {children}
        </span>
    )
}

export default StateComponent;
//children can be applied when we want to render different content to modal, for example.
export default function Wrapper (props) {
    return (
        <div style={{backgroundColor: props.color}}>
            {props.children}
        </div>
    )
}
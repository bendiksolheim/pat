export default ({children, sidebar}) => {
    const className = sidebar
        ? 'pane-sm sidebar'
        : 'pane';

    return (
        <div className={className}>{children}</div>
    );
};
import classname from 'classname';

export default ({children, sidebar, className}) => {
    const c = classname('pane', className, {
        'pane--sm sidebar': sidebar,
    });

    return (
        <div className={c}>{children}</div>
    );
};
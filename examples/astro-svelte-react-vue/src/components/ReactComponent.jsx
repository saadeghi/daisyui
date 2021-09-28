import { useEffect } from 'react';

const Example = props => {
  useEffect(() => {
    console.log('React component works ✅')
  }, []);

  return (
    <div className="p-10 bg-base-100 text-base-content" data-theme="forest">
      <button className="btn">button</button>
      <button className="btn btn-primary">button</button>
      <button className="btn btn-secondary">button</button>
      <button className="btn btn-accent">button</button>
    </div>
  )
}
export default Example
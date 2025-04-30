import { useState } from "react";
import Modal from "./components/Modal/Modal"; // Предполагаем, что Modal компонент работает корректно

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const toggleModal = () => {
    setIsModalOpen((prev)=> {
      return !prev
    }); 
  };


  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>

      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Left Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Nulla facilisi. Nullam vehicula, dui in scelerisque suscipit, nisl nunc aliquet magna, id tristique turpis tortor sit amet ante. Curabitur in enim vel justo vehicula hendrerit.
        </p>
        <p>
          Sed euismod euismod risus, vel posuere mi malesuada in. Ut sit amet tincidunt odio, ac malesuada erat. Morbi nec metus metus. Etiam feugiat sagittis lorem, at dictum ante tempus ac. Integer tincidunt suscipit urna, sit amet lobortis dui iaculis a.
        </p>
        <p>
          Proin sit amet velit nec felis ullamcorper interdum ac et eros. Integer quis felis id mi lacinia venenatis at non sem. Curabitur ac felis eget libero rhoncus volutpat. Aliquam vitae enim ac risus tincidunt aliquet id eu risus.
        </p>
        <p>
          Cras id ipsum non lectus venenatis tristique. Integer suscipit, mauris et faucibus fermentum, tortor velit ultricies nunc, et sollicitudin libero eros a risus. Nulla egestas malesuada risus sit amet pretium. Suspendisse id euismod libero.
        </p>
        <p>
          Mauris euismod mollis lectus, id suscipit nunc. Sed sollicitudin euismod dui. Integer vel hendrerit sapien. Aliquam erat volutpat. Integer accumsan ex eget erat feugiat, at consequat enim volutpat.
        </p>
        <p>
          Aenean eu eros at nisi faucibus fermentum. Ut iaculis mauris eget eros suscipit, non sodales leo venenatis. Sed a ante scelerisque, tristique sapien id, varius dui. Nulla vestibulum, mi vel laoreet posuere, elit nunc aliquet eros, sed scelerisque augue lorem eget neque.
        </p>
        <p>
          Vivamus lobortis condimentum felis, a sodales risus varius vitae. Nunc vulputate orci a nunc laoreet, ac laoreet tortor rutrum. Suspendisse sit amet felis a nunc pharetra dictum eu ac lorem. Curabitur sollicitudin turpis et elit placerat, at viverra urna vehicula.
        </p>
        <p>
          Donec at sapien urna. Nam viverra tincidunt nunc, in dignissim lorem vulputate ut. Sed placerat pharetra tristique. Cras tincidunt ac sapien ac consequat. Integer malesuada massa sapien, vel malesuada est feugiat non.
        </p>
        <p>
          Morbi et risus ut ante luctus facilisis sit amet ac tortor. Proin vitae libero sapien. Integer nec felis in libero vulputate congue a at nulla. Vivamus ut nunc nec justo egestas ultricies a sit amet lectus. Nulla vitae odio interdum, hendrerit purus sed, sollicitudin risus.
        </p>
        <p>
          Fusce facilisis felis in sapien ultricies, id venenatis metus auctor. Aenean facilisis ipsum et suscipit placerat. Nam quis nibh ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet orci lacus.
        </p>
      </div>
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Left Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Nulla facilisi. Nullam vehicula, dui in scelerisque suscipit, nisl nunc aliquet magna, id tristique turpis tortor sit amet ante. Curabitur in enim vel justo vehicula hendrerit.
        </p>
        <p>
          Sed euismod euismod risus, vel posuere mi malesuada in. Ut sit amet tincidunt odio, ac malesuada erat. Morbi nec metus metus. Etiam feugiat sagittis lorem, at dictum ante tempus ac. Integer tincidunt suscipit urna, sit amet lobortis dui iaculis a.
        </p>
        <p>
          Proin sit amet velit nec felis ullamcorper interdum ac et eros. Integer quis felis id mi lacinia venenatis at non sem. Curabitur ac felis eget libero rhoncus volutpat. Aliquam vitae enim ac risus tincidunt aliquet id eu risus.
        </p>
        <p>
          Cras id ipsum non lectus venenatis tristique. Integer suscipit, mauris et faucibus fermentum, tortor velit ultricies nunc, et sollicitudin libero eros a risus. Nulla egestas malesuada risus sit amet pretium. Suspendisse id euismod libero.
        </p>
        <p>
          Mauris euismod mollis lectus, id suscipit nunc. Sed sollicitudin euismod dui. Integer vel hendrerit sapien. Aliquam erat volutpat. Integer accumsan ex eget erat feugiat, at consequat enim volutpat.
        </p>
        <p>
          Aenean eu eros at nisi faucibus fermentum. Ut iaculis mauris eget eros suscipit, non sodales leo venenatis. Sed a ante scelerisque, tristique sapien id, varius dui. Nulla vestibulum, mi vel laoreet posuere, elit nunc aliquet eros, sed scelerisque augue lorem eget neque.
        </p>
        <p>
          Vivamus lobortis condimentum felis, a sodales risus varius vitae. Nunc vulputate orci a nunc laoreet, ac laoreet tortor rutrum. Suspendisse sit amet felis a nunc pharetra dictum eu ac lorem. Curabitur sollicitudin turpis et elit placerat, at viverra urna vehicula.
        </p>
        <p>
          Donec at sapien urna. Nam viverra tincidunt nunc, in dignissim lorem vulputate ut. Sed placerat pharetra tristique. Cras tincidunt ac sapien ac consequat. Integer malesuada massa sapien, vel malesuada est feugiat non.
        </p>
        <p>
          Morbi et risus ut ante luctus facilisis sit amet ac tortor. Proin vitae libero sapien. Integer nec felis in libero vulputate congue a at nulla. Vivamus ut nunc nec justo egestas ultricies a sit amet lectus. Nulla vitae odio interdum, hendrerit purus sed, sollicitudin risus.
        </p>
        <p>
          Fusce facilisis felis in sapien ultricies, id venenatis metus auctor. Aenean facilisis ipsum et suscipit placerat. Nam quis nibh ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet orci lacus.
        </p>
      </div>
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Left Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Nulla facilisi. Nullam vehicula, dui in scelerisque suscipit, nisl nunc aliquet magna, id tristique turpis tortor sit amet ante. Curabitur in enim vel justo vehicula hendrerit.
        </p>
        <p>
          Sed euismod euismod risus, vel posuere mi malesuada in. Ut sit amet tincidunt odio, ac malesuada erat. Morbi nec metus metus. Etiam feugiat sagittis lorem, at dictum ante tempus ac. Integer tincidunt suscipit urna, sit amet lobortis dui iaculis a.
        </p>
        <p>
          Proin sit amet velit nec felis ullamcorper interdum ac et eros. Integer quis felis id mi lacinia venenatis at non sem. Curabitur ac felis eget libero rhoncus volutpat. Aliquam vitae enim ac risus tincidunt aliquet id eu risus.
        </p>
        <p>
          Cras id ipsum non lectus venenatis tristique. Integer suscipit, mauris et faucibus fermentum, tortor velit ultricies nunc, et sollicitudin libero eros a risus. Nulla egestas malesuada risus sit amet pretium. Suspendisse id euismod libero.
        </p>
        <p>
          Mauris euismod mollis lectus, id suscipit nunc. Sed sollicitudin euismod dui. Integer vel hendrerit sapien. Aliquam erat volutpat. Integer accumsan ex eget erat feugiat, at consequat enim volutpat.
        </p>
        <p>
          Aenean eu eros at nisi faucibus fermentum. Ut iaculis mauris eget eros suscipit, non sodales leo venenatis. Sed a ante scelerisque, tristique sapien id, varius dui. Nulla vestibulum, mi vel laoreet posuere, elit nunc aliquet eros, sed scelerisque augue lorem eget neque.
        </p>
        <p>
          Vivamus lobortis condimentum felis, a sodales risus varius vitae. Nunc vulputate orci a nunc laoreet, ac laoreet tortor rutrum. Suspendisse sit amet felis a nunc pharetra dictum eu ac lorem. Curabitur sollicitudin turpis et elit placerat, at viverra urna vehicula.
        </p>
        <p>
          Donec at sapien urna. Nam viverra tincidunt nunc, in dignissim lorem vulputate ut. Sed placerat pharetra tristique. Cras tincidunt ac sapien ac consequat. Integer malesuada massa sapien, vel malesuada est feugiat non.
        </p>
        <p>
          Morbi et risus ut ante luctus facilisis sit amet ac tortor. Proin vitae libero sapien. Integer nec felis in libero vulputate congue a at nulla. Vivamus ut nunc nec justo egestas ultricies a sit amet lectus. Nulla vitae odio interdum, hendrerit purus sed, sollicitudin risus.
        </p>
        <p>
          Fusce facilisis felis in sapien ultricies, id venenatis metus auctor. Aenean facilisis ipsum et suscipit placerat. Nam quis nibh ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet orci lacus.
        </p>
      </div>
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Left Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Nulla facilisi. Nullam vehicula, dui in scelerisque suscipit, nisl nunc aliquet magna, id tristique turpis tortor sit amet ante. Curabitur in enim vel justo vehicula hendrerit.
        </p>
        <p>
          Sed euismod euismod risus, vel posuere mi malesuada in. Ut sit amet tincidunt odio, ac malesuada erat. Morbi nec metus metus. Etiam feugiat sagittis lorem, at dictum ante tempus ac. Integer tincidunt suscipit urna, sit amet lobortis dui iaculis a.
        </p>
        <p>
          Proin sit amet velit nec felis ullamcorper interdum ac et eros. Integer quis felis id mi lacinia venenatis at non sem. Curabitur ac felis eget libero rhoncus volutpat. Aliquam vitae enim ac risus tincidunt aliquet id eu risus.
        </p>
        <p>
          Cras id ipsum non lectus venenatis tristique. Integer suscipit, mauris et faucibus fermentum, tortor velit ultricies nunc, et sollicitudin libero eros a risus. Nulla egestas malesuada risus sit amet pretium. Suspendisse id euismod libero.
        </p>
        <p>
          Mauris euismod mollis lectus, id suscipit nunc. Sed sollicitudin euismod dui. Integer vel hendrerit sapien. Aliquam erat volutpat. Integer accumsan ex eget erat feugiat, at consequat enim volutpat.
        </p>
        <p>
          Aenean eu eros at nisi faucibus fermentum. Ut iaculis mauris eget eros suscipit, non sodales leo venenatis. Sed a ante scelerisque, tristique sapien id, varius dui. Nulla vestibulum, mi vel laoreet posuere, elit nunc aliquet eros, sed scelerisque augue lorem eget neque.
        </p>
        <p>
          Vivamus lobortis condimentum felis, a sodales risus varius vitae. Nunc vulputate orci a nunc laoreet, ac laoreet tortor rutrum. Suspendisse sit amet felis a nunc pharetra dictum eu ac lorem. Curabitur sollicitudin turpis et elit placerat, at viverra urna vehicula.
        </p>
        <p>
          Donec at sapien urna. Nam viverra tincidunt nunc, in dignissim lorem vulputate ut. Sed placerat pharetra tristique. Cras tincidunt ac sapien ac consequat. Integer malesuada massa sapien, vel malesuada est feugiat non.
        </p>
        <p>
          Morbi et risus ut ante luctus facilisis sit amet ac tortor. Proin vitae libero sapien. Integer nec felis in libero vulputate congue a at nulla. Vivamus ut nunc nec justo egestas ultricies a sit amet lectus. Nulla vitae odio interdum, hendrerit purus sed, sollicitudin risus.
        </p>
        <p>
          Fusce facilisis felis in sapien ultricies, id venenatis metus auctor. Aenean facilisis ipsum et suscipit placerat. Nam quis nibh ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet orci lacus.
        </p>
      </div>
      
      {isModalOpen && <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <h2>Modal Content</h2>
        <p>This is some content inside the modal!</p>
      </Modal>}
      
      
    </div>
  );
};

function debounce(fn, wait = 1000) {
  var timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  }
}

/**
 * 同步消息到父容器
 * @param {{ type: string, data?: any }} msg
 */
function postMessageToDashboard(msg) {
  if (!window.parent) {
    console.log(msg);
    return;
  }
  const { type, data } = msg;
  window.parent.postMessage({
    type,
    data,
  });
}

/**
 * 同步 pdf 下载进度
 * @param {number} loaded
 * @param {number} total
 */
function postPdfFileLoadingProcess(loaded, total) {
  postMessageToDashboard({
    type: 'load',
    data: {
      loaded,
      total,
    }
  });
}

/**
 * 同步 UI 刷新事件
 */
const postUiChangeEvent = debounce(() => {
  postMessageToDashboard({
    type: 'ui'
  });
})

export {
  postMessageToDashboard,
  postUiChangeEvent,
  postPdfFileLoadingProcess,
}

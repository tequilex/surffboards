const mesureWidth = item => {
  let reqItemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest('.offers-menu');
  const titlesBlocks = container.find('.offers-menu__title');
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

  const textContainer = item.find('.offers-menu__container');
  const paddingLeft = parseInt(textContainer.css('padding-left'));
  const paddingRight = parseInt(textContainer.css('padding-right'));

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  } else {
    reqItemWidth = 524
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingRight - paddingLeft
  }

}

const closeEveryItemInContainer = container => {
  const items = container.find('.offers-menu__item');
  const content = container.find('.offers-menu__content');

  items.removeClass('active');
  content.width(0);
}

const openItemMenu = item => {
  const hiddenContent = item.find('.offers-menu__content')
  const reqWidth = mesureWidth(item);
  const textBlock = item.find('.offers-menu__container')

  item.addClass('active');
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};

$('.offers-menu__title').on('click', e => {
  console.log('ffff');
  const $this = $(e.currentTarget);
  const item = $this.closest('.offers-menu__item');
  const itemOpened = item.hasClass('active');
  const container = $this.closest('.offers-menu')

  if (itemOpened) {
    closeEveryItemInContainer(container);
  } else {
    closeEveryItemInContainer(container);
    openItemMenu(item);
  }
});

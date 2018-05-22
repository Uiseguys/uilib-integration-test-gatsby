import React from 'react'

const markdownContent = `
  # Header1
  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
  ## Header 2
  Run \`ng test\` to execute the unit tests via [Karma](https://karma-runner.github.io).
  ## Running end-to-end tests
  Run \`ng e2e\` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
  ### Bug Fixes
  * **common:** more detailed info about error
  \`fix(common): more detailed info about error\`
  `
const multiSelectData = [ 'Alex', 'Alabama', 'Alaska', 'andreas', 'alexandro' ]

const thumbnail = {
  0: {
    src: 'https://www.w3schools.com/howto/img_fjords.jpg',
    style: {
      left: '-60px',
      width: '600px',
      height: '68px',
      clip: 'rect(0, 120px, 68px, 0)'
    }
  },
  1: {
    style: {
      left: '-180px',
      clip: 'rect(0, 240px, 68px, 120px)'
    }
  },
  2: {
    style: {
      left: '-300px',
      clip: 'rect(0, 360px, 68px, 240px)'
    }
  },
  3: {
    style: {
      left: '-420px',
      clip: 'rect(0, 480px, 68px, 360px)'
    }
  },
  4: {
    style: {
      left: '-540px',
      clip: 'rect(0, 600px, 68px, 480px)'
    }
  }
}

const PageHeader = ({ children }) => <h2 className='page-header'>{children} </h2>
const ContainerFluid = ({ children }) => <div className='container-fluid'>{children} </div>
const Row = ({ children }) => <div className='row'> {children} </div>
const Col = ({ children }) => <div className='col-lg-12 mb-4'> {children} </div>
const Pill = () => (
  <div>
    <PageHeader>Pill</PageHeader>
    <scb-badge>New</scb-badge>
    <scb-badge pill>New pill</scb-badge>
    <scb-badge type='success' pill>
      Success pill
    </scb-badge>
  </div>
)

const Moment = () => (
  <div>
    <PageHeader>Moment</PageHeader>
    <cwc-moment duration='123412341234123' unit='seconds' />
    <cwc-moment date='2016-01-10 14:30' format='L' />
    <cwc-moment date='2018-04-08 14:30' diff={true} humanize={true} />
    <cwc-moment date='2018-04-09 17:45' diff={true} humanize={true} />
    <cwc-moment date='2018-04-09 06:45' lang='fr' />
    <cwc-moment date='2018-04-09 06:45' lang='de' />
    <cwc-moment date='2018-04-09 06:45' lang='en' />
  </div>
)

const Dropdown = () => (
  <div>
    <PageHeader>Dropdown</PageHeader>
    <cwc-dropdown id='officialExample'>
      <button slot='dropdown-trigger' className='btn btn-primary' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
        Example dropdown
      </button>

      <div slot='dropdown-menu' className='dropdown-menu'>
        <a className='dropdown-item' role='presentation' href='#'>
          Static
        </a>
        <a className='dropdown-item' role='presentation' href='#'>
          Dynamic
        </a>
        <div className='dropdown-divider' />
        <a className='dropdown-item' role='presentation' href='#'>
          Third Item
        </a>
      </div>
    </cwc-dropdown>
  </div>
)

const Image = () => (
  <div>
    <PageHeader>Image</PageHeader>
    <fcl-image brokenUrl='https://s3.amazonaws.com/images.seroundtable.com/invalid-url-1354629517.png' src='https://www.w3schools.com/howto/img_fjords.jpg' />
  </div>
)

const Markdown = () => (
  <div>
    <PageHeader>Markdown component</PageHeader>
    <cwc-markdown data={markdownContent} />
  </div>
)

const Multiselect = () => (
  <div>
    <PageHeader>Multi Select</PageHeader>
    <cwc-multiselect placeholder='Search something e.g. &#39;Argentina&#39;' className='border-form-control' data={multiSelectData} />
  </div>
)

const Progress = () => (
  <div>
    <h2 className='page-header'>Progress Bar</h2>

    <cwc-progress-bar class='mx-1' progressBarType='success' text='10' striped='true' animated='true' progress='10' />

    <cwc-progress-bar class='mx-1' text='50' progress='40' />
  </div>
)

const Tags = () => (
  <div>
    <PageHeader>Tags </PageHeader>
    <cwc-tag class='mx-1' text='Stencil' link='https://stenciljs.com/' closable='true' rounded='true' imgLink='https://stenciljs.com/assets/img/logo.png' />
    <cwc-tag
      class='mx-1'
      text='Angular'
      link='https://angular.io'
      closable='true'
      rounded='true'
      imgLink='https://cdn.auth0.com/blog/angular2-series/angular2-logo.png'
    />
    <cwc-tag
      class='mx-1'
      text='React'
      link='https://reactjs.org/'
      closable='true'
      rounded='true'
      imgLink='http://v.fastcdn.co/u/abda26b9/20243556-0-react-logo.png'
    />
  </div>
)

const VideoPlayer = () => (
  <div>
    <PageHeader>Video Player</PageHeader>
    <fcl-video-player poster='http://images.telvi.de/images/originals/2017/50/1/319b47392316aa2c54d5fbab.jpg' thumbnail={thumbnail} theme='berlin'>
      <source src='http://techslides.com/demos/sample-videos/small.mp4' type='video/mp4' />
    </fcl-video-player>
  </div>
)

const Avatar = () => (
  <div>
    <PageHeader>Avatar component</PageHeader>
    <cwc-avatar name='John Doe' />
    <cwc-avatar name='John Doe' rounded />
    <cwc-avatar name='John Doe' color='ff00ff' />
    <cwc-avatar name='John Doe' background='a0a0a0' />
    <cwc-avatar name='John Doe' font-size='0.9' />
    <cwc-avatar name='John Doe' length='1' />
    <cwc-avatar name='john Doe' uppercase='false' />
    <cwc-avatar name='John Doe' size='96' />
  </div>
)

const DatePicker = () => (
  <div>
    <PageHeader>Datepicker component</PageHeader>
    <div className='datepickers-wrapper jumbotron w-50 mx-1 row'>
      <cwc-datepicker class='mx-5' start-date='03/25/2018' end-date='04/12/2018' />
      <cwc-datepicker class='styled mx-5' lang='de' />
    </div>
  </div>
)

const InlineEdit = () => (
  <div>
    <PageHeader>Inlineedit component</PageHeader>
    <cwc-inlineedit label='Field label' value='observable$' onconfirm={($event) => console.log($event)} />
  </div>
)

const Fileinput = () => (
  <div>
    <PageHeader>Fileinput component</PageHeader>
    <cwc-file-input class='mb-0' />
  </div>
)

export default () => (
  <div>
    <ContainerFluid>
      <cwc-styles />

      <Row>
        <Col>
          <Pill />
          <Moment />
          <Dropdown />
          <Image />
          <Markdown />
          <Multiselect />
          <Progress />
          <Tags />
          <VideoPlayer />
          <Avatar />
          <DatePicker />
          <InlineEdit />
          <Fileinput />
        </Col>
      </Row>
    </ContainerFluid>
  </div>
)

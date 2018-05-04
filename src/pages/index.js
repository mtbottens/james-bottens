import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        let gallery = this.props.data.gallery.edges
        gallery = gallery.map(node => node.node)

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>For my brother James.</h2>
                        </header>
                        <p>
                            I would like to keep this webpage up to date with any and all pictures of my brother. If you are visiting, and have some pictures,
                            please <a href="mailto: michael@bottens.me">email them to me. (michael@bottens.me)</a>
                        </p>
                    </section>

                    <section id="two">
                        <h2>Some Pictures</h2>

                        <Gallery images={gallery} />
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Any Questions? Want to share a fun story about James? Want to submit a photo? Shoot me a message here!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" name="james-image" netlify>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <div className="12u"><input type="file" name="image" id="image" /></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Submit" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">michael@bottens.me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }

        gallery: allImageSharp {
            edges {
                node {
                    id
                    thumbnailSizes: resize(height: 300) {
                        src
                        tracedSVG
                        width
                        height
                        aspectRatio
                        originalName
                    }
                    sizes {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                    }
                }
            }
        }
    }
`
import React from 'react'
import { BlogCard, SocialMedia } from '../components'
import { BlogHero } from '../containers'

const Blog = () => {
    return (
        <section>
            <BlogHero />
            <BlogCard/>
            <SocialMedia/>
        </section>
    )
}

export default Blog

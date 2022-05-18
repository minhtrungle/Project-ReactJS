import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import banner from '../assets/images/banner.png'
const axios = require("axios").default;

const Home = () => {
  const [product, setProduct] = useState([]);

  const onTop = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log(e);
  };

  const getProduct = async (data) => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://khanh.tokyo/api/products",
        data,
      });
      setProduct(result.data.data.data);
    } catch (errors) {
      console.log("loi");
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);
  return (
    <Helmet title="Trang chủ">
        <HeroSlider
            data={heroSliderData}
            control={true}
            auto={false}
            timeOut={5000}
        />

        {/* chính sách */}
        <Section>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        policy.map((item, index) => <Link key={index} to="/policy">
                            <PolicyCard
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                            />
                        </Link>)
                    }
                </Grid>
            </SectionBody>
        </Section>
        {/* khuyến mãi */}
        <Section>
            <SectionTitle>
                top sản phẩm bán chạy trong tuần
            </SectionTitle>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        productData.getProducts(4).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))
                    }
                </Grid>
            </SectionBody>
        </Section>

        {/* sản phẩn mới */}
        <Section>
            <SectionTitle>
                sản phẩm mới
            </SectionTitle>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        productData.getProducts(8).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))
                    }
                </Grid>
            </SectionBody>
        </Section>
        
        {/* banner */}
        <Section>
            <SectionBody>
                <Link to="/catalog">
                    <img src={banner} alt="" />
                </Link>
            </SectionBody>
        </Section>

        {/* sản phẩm phổ biến */}
        <Section>
            <SectionTitle>
                phổ biến
            </SectionTitle>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        productData.getProducts(12).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))
                    }
                </Grid>
            </SectionBody>
        </Section>
    </Helmet>
)
}

export default HomePage;

